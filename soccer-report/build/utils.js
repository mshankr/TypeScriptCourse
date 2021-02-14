"use strict";
exports.__esModule = true;
exports.dateStringToDate = void 0;
/**
 * Convert UK date to US date
 * Because Date object only accept US date format
 * DD/MM/YYYY -> MM/DD/YYYY
 * @param dateString
 * @returns Date
 */
var dateStringToDate = function (dateString) {
    var dateParts = dateString.split("/").map(function (datePart) { return parseInt(datePart); });
    // Month -1 because it starts count from 0
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
