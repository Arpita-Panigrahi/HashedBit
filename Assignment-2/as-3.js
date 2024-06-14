function findTax(salary) {
    if (typeof salary !== 'number' || salary < 0) {
      return 'Invalid input: Salary must be a positive number.';
    }
  
    switch (true) {
      case salary <= 500000:
        return 0;
      case salary <= 1000000:
        return salary * 0.1;
      case salary <= 1500000:
        return salary * 0.2;
      default:
        return salary * 0.3;
    }
  }
  
  // Example usage
  console.log("Tax for ₹500000:", findTax(500000)); 
  console.log("Tax for ₹750000:", findTax(750000)); 
  console.log("Tax for ₹1200000:", findTax(1200000));
  console.log("Tax for ₹2000000:", findTax(2000000));
  console.log("Tax for invalid input:", findTax(-250000));
  