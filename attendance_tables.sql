-- 打卡系統基本資料表
-- 使用前請先建立資料庫: CREATE DATABASE pos_system;

-- 1. 員工資料表
CREATE TABLE employees (
    employee_id VARCHAR(20) PRIMARY KEY COMMENT '員工編號',
    employee_name VARCHAR(100) NOT NULL COMMENT '員工姓名',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '建立時間'
) COMMENT '員工資料表';

-- 2. 打卡記錄表
CREATE TABLE attendance_records (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '記錄ID',
    employee_id VARCHAR(20) NOT NULL COMMENT '員工編號',
    clock_type ENUM('IN', 'OUT') NOT NULL COMMENT '打卡類型：IN=上班, OUT=下班',
    clock_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '打卡時間',
    
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    INDEX idx_employee_id (employee_id),
    INDEX idx_clock_time (clock_time)
) COMMENT '打卡記錄表';

-- 插入測試員工資料
INSERT INTO employees (employee_id, employee_name) VALUES
('001', '張小明'),
('002', '李小華'),
('003', '王小美'),
('004', '陳大同'),
('005', '林美玲');

-- 查詢語句範例：
-- 查看所有員工
-- SELECT * FROM employees;

-- 查看某員工的打卡記錄
-- SELECT e.employee_name, a.clock_type, a.clock_time 
-- FROM attendance_records a 
-- JOIN employees e ON a.employee_id = e.employee_id 
-- WHERE a.employee_id = '001' 
-- ORDER BY a.clock_time DESC;
