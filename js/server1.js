const sql = require('mssql');

// إعدادات الاتصال بقاعدة البيانات
const config = {
    user: 'uname',        // اسم المستخدم
    password: '74222',    // كلمة المرور
    server: 'localhost',        // عنوان السيرفر (مثلاً: localhost)
    database: 'webDes',
      // اسم قاعدة البيانات
    options: {
        encrypt: true, // استخدم هذه الخيارات إذا كنت تتصل بـ Azure
        trustServerCertificate: true // يجب تغييره في بيئة الإنتاج
    }
};

// الاتصال بقاعدة البيانات
sql.connect(config).then(pool => {
    console.log('Connected to SQL Server');

    // تنفيذ استعلام
    return pool.request().query('SELECT * FROM users');
}).then(result => {
    console.log(result.recordset); // عرض النتائج
}).catch(err => {
    console.error('SQL error');
}).finally(() => {
    sql.close(); // إغلاق الاتصال
});
