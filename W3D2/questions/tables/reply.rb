require_relative "./questions.rb"

class Reply < Table
  attr_accessor :user_id, :question_id, :parent_id, :body

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
    @parent_id = options['parent_id']
    @body = options['body']
  end

  def self.all
    data = QuestionDBConnection.instance.execute("SELECT * FROM replies")
    data.map {|datum| Reply.new(datum)}
  end

  def self.find_by_user_id(user_id)
    data = QuestionDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        replies
      WHERE
        user_id = ?
    SQL

    return nil unless data.length > 0
    Reply.new(data.first)
  end

  def self.find_by_question_id(question_id)
    data = QuestionDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        replies
      WHERE
        question_id = ?
    SQL

    return nil unless data.length > 0
    Reply.new(data.first)
  end

  def save
    update if @id
    QuestionDBConnection.instance.execute(<<-SQL, @user_id, @question_id, @parent_id, @body)
      INSERT INTO
        replies (user_id, question_id, parent_id, body))
      VALUES
        (?, ?, ?, ?)
      SQL

    @id = QuestionDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    QuestionDBConnection.instance.execute(<<-SQL, @user_id, @question_id, @parent_id, @body)
      UPDATE
        reply
      SET
        user_id = ?, question_id = ?, parent_id = ?, body = ?
      WHERE
        id = ?
    SQL
  end
end
