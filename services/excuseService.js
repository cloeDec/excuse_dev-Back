const conn = require("./database");

const fetchExcuse = () => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT http_code, tag, message FROM excuse;`;
    conn.query(sql, (err, results, fields) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const addExcuse = (exc) => {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO excuse (http_code, tag, message) 
      VALUES (?, ?, ?);`;
    let query = conn.query(
      sql,
      [exc.http_code, exc.tag, exc.message],
      (err, result, field) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
};

const fetchExcuseById = (http_code) => {
  return new Promise((resolve, reject) => {
      let sql = `SELECT http_code, tag, message FROM excuse
    WHERE http_code=?`;
      let query = conn.query(sql, [http_code],(err, result, field) => {
          if(err) return reject(err);
          resolve(result);
      });
  });
}

module.exports = {
  fetchExcuse,
  addExcuse,
  fetchExcuseById,
};
