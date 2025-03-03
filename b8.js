let month = Number(prompt("nhập số tháng"));

switch (month) {
    case 1:
    case 2:
    case 3:
        document.write(`mùa xuân`);
        break;
    case 4:
    case 5:
    case 6:
        document.write(`mùa hạ`);
        break;
    case 7:
    case 8:
    case 9:
        document.write(`mùa thu`);
        break;
    case 10:
    case 11:
    case 12:
        document.write(`mùa đông`);
        break;
    default:
        document.write(`tháng không hợp lệ`);
        break;
}