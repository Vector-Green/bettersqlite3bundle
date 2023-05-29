const db = require("better-sqlite3")(":memory:");
db.row("CREATE TABLE myTable (id INT, name CHAR )");
