// ฟังก์ชันสำหรับ สลับเปิด-ปิด (Toggle) การแสดงผลรูปภาพใต้หัวข้อแบบไม่บดบังเนื้อหาหลัก
function toggleImage(panelId) {
    const panel = document.getElementById(panelId);
    
    if (panel) {
        // เช็กสถานะปัจจุบัน ถ้าซ่อนอยู่ให้เปิด ถ้าเปิดอยู่ให้ซ่อน
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}