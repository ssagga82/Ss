let selectedAllergy = ""; // المتغير لحفظ نوع الحساسية الذي اختاره المستخدم

// دالة لتحديد نوع الحساسية عند النقر على أيقونة
function selectAllergy(element, allergy) {
    selectedAllergy = allergy;
    console.log("تم اختيار الحساسية: " + selectedAllergy); // طباعة الحساسية المختارة (اختياري)

    // إزالة الإطار من جميع الأيقونات
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));

    // إضافة الإطار المربع للأيقونة المختارة
    element.classList.add('selected');

    // تفعيل الزر بعد الاختيار
    document.getElementById("nextButton").disabled = false;
    document.getElementById("nextButton").style.opacity = 1; // جعل الزر قابل للنقر
}

// دالة لتحويل الصفحة من الأولى إلى الثانية
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال التلقائي للنموذج

    // الحصول على قيم المدخلات
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
