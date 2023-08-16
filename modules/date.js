import { DateTime } from './luxon.js';

const displayDate = document.getElementById('date_display');
const Date = () => {
    const date = DateTime.now();
    displayDate.innerHTML = date.toLocaleString(
        DateTime.DATETIME_MED,
    );
};
Date();

export default { Date };
