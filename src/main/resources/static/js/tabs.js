function switchTab(tab) {
  // 獲取當前 active 的按鈕
  const activeButton = document.querySelector('.tab-button.active');
  
  // 檢查點擊的分頁是否已經是 active 狀態
  const clickedButton = event.target;
  if (clickedButton.classList.contains('active')) {
    // 如果已經是 active 狀態，不執行跳轉
    return;
  }
  
  // 根據參數跳轉到對應頁面
  switch(tab) {
    case 'clock':
      window.location.href = 'clock.html';
      break;
    case 'records':
      window.location.href = 'clock-records.html';
      break;
    case 'schedule':
      window.location.href = 'schedule.html';
      break;
  }
}

// 員工編號輸入功能
function addNumber(number) {
  const input = document.getElementById('employeeId');
  if (input.value.length < 10) { // 限制最大長度為10位
    input.value += number;
  }
}

function clearInput() {
  const input = document.getElementById('employeeId');
  input.value = '';
}

function submitEmployeeId() {
  const input = document.getElementById('employeeId');
  const employeeId = input.value.trim();
  
  if (employeeId === '') {
    alert('請輸入員工編號');
    return;
  }
  
  // 將員工編號暫存到 sessionStorage
  sessionStorage.setItem('currentEmployeeId', employeeId);
  
  // 跳轉到打卡操作頁面
  window.location.href = 'clock-action.html';
}
