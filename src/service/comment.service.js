const connections = require("../app/database");
class CommentService {
  async create(momentId, content, userId) {
    console.log(content, momentId, userId);
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?,?,?);`;
    const [result] = await connections.execute(statement, [
      content,
      momentId,
      userId,
    ]);
    return result;
  }
  async reply(momentId, content, userId, commentId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?,?,?,?);`;
    const [result] = await connections.execute(statement, [
      content,
      momentId,
      userId,
      commentId,
    ]);
    return result;
  }
  async update(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?`;
    const [result] = await connections.execute(statement, [content, commentId]);
    return result;
  }
  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?;`;
    const [result] = await connections.execute(statement, [commentId]);
    return result;
  }
  async getCommentsByMommentId(momentId) {
    const statement = `
      SELECT 
        m.id, m.content, m.comment_id  commentid, m.createAt createTime,
        JSON_OBJECT('id', u.id, 'name', u.name)     
      FROM comment m
      LEFT JOIN user u ON u.id = m.user_id
      WHERE moment_id = 20;
     `;
    const [result] = await connections.execute(statement, [momentId]);
    return result;
  }
}

module.exports = new CommentService();
