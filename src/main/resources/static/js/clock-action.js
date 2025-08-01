// 打卡操作頁面的 JavaScript 功能

// 更新當前時間
function updateCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // 獲取星期
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = weekdays[now.getDay()];
    
    const timeString = `現在時間：${year}-${month}-${day} (${weekday}) ${hours}:${minutes}:${seconds}`;
    
    const timeElement = document.getElementById('currentDateTime');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// 上班打卡
function clockIn() {
    const employeeId = sessionStorage.getItem('currentEmployeeId') || '未知';
    const now = new Date();
    const timeString = now.toLocaleString('zh-TW');
    
    alert(`員工編號: ${employeeId}\n上班打卡成功！\n時間: ${timeString}`);
    
    // 可以在這裡添加發送到後端的邏輯
    console.log('上班打卡:', { employeeId, time: timeString, type: 'clock-in' });
    
    // 打卡完成後跳回打卡輸入頁面
    setTimeout(() => {
        goBack();
    }, 1000); // 延遲1秒讓用戶看到成功訊息
}

// 下班打卡
function clockOut() {
    const employeeId = sessionStorage.getItem('currentEmployeeId') || '未知';
    const now = new Date();
    const timeString = now.toLocaleString('zh-TW');
    
    alert(`員工編號: ${employeeId}\n下班打卡成功！\n時間: ${timeString}`);
    
    // 可以在這裡添加發送到後端的邏輯
    console.log('下班打卡:', { employeeId, time: timeString, type: 'clock-out' });
    
    // 打卡完成後跳回打卡輸入頁面
    setTimeout(() => {
        goBack();
    }, 1000); // 延遲1秒讓用戶看到成功訊息
}

// 返回到員工編號輸入頁面
function goBack() {
    // 清除暫存的員工編號
    sessionStorage.removeItem('currentEmployeeId');
    // 返回到打卡輸入頁面
    window.location.href = 'clock.html';
}

// 頁面載入時開始更新時間
document.addEventListener('DOMContentLoaded', function() {
    // 立即更新一次時間
    updateCurrentTime();
    
    // 每秒更新時間
    setInterval(updateCurrentTime, 1000);
    
    // 顯示當前員工編號（如果有的話）
    const employeeId = sessionStorage.getItem('currentEmployeeId');
    if (employeeId) {
        console.log('當前員工編號:', employeeId);
    }
});
