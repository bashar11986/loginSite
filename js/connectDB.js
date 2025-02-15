
const sql = require('mssql');
// إعدادات الاتصال بقاعدة البيانات
const config = {
    user: 'bmcf',        // اسم المستخدم
    password: 'A@123456789',    // كلمة المرور
    server: '172.25.22.206',        // عنوان السيرفر (مثلاً: localhost)
    database: 'cfmanagement',
      // اسم قاعدة البيانات
    options: {
        encrypt: true, // استخدم هذه الخيارات إذا كنت تتصل بـ Azure
        trustServerCertificate: true // يجب تغييره في بيئة الإنتاج
    }
};
// الاتصال بقاعدة البيانات
sql.connect(config).then(x => {
    console.log('Connected to SQL Server');
    // تنفيذ استعلام
    return x.request()
        .query('SELECT  [Name] FROM [cfmanagement].[dbo].[Folders]');
}).then(r => {
    console.log(r.recordset); // عرض النتائج
}).catch(err => {
    console.error('SQL error' , err);
}).finally(() => {
    sql.close(); });  // إغلاق الاتصال

