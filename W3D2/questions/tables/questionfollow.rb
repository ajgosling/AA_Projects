require_relative "./questions.rb"

class QuestionFollow
  attr_accessor :user_id, :question_id

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end

  def self.all
    data = QuestionDBConnection.instance.execute("SELECT * FROM question_follows")
    data.map {|datum| QuestionFollow.new(datum)}
  end

  def self.followers_for_question_id(question_id)
    data = QuestionDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        users.*
      FROM
        question_follows
      JOIN users ON question_follows.user_id = users.id
      WHERE
        question_id = ?
    SQL

    return nil unless data.length > 0
    data.map {|datum| Question.new(datum)}
  end

  def self.followed_questions_for_user_id(user_id)
    data = QuestionDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        questions.*
      FROM
        question_follows
      JOIN questions ON question_follows.question_id = questions.id
      WHERE
        question_follows.user_id = ?
    SQL

    return nil unless data.length > 0
    data.map {|datum| Question.new(datum)}
  end

  def self.most_followed_questions(n)
    data = QuestionDBConnection.instance.execute(<<-SQL, n)
      SELECT
        questions.*
      FROM
        question_follows
      JOIN questions ON question_follows.question_id = questions.id

      GROUP BY
        questions.id
      ORDER BY
        COUNT(*)
      LIMIT ?
    SQL

    return nil unless data.length > 0
    data.map {|datum| Question.new(datum)}
  end
end
