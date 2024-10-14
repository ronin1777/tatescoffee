
import {jwtDecode} from "jwt-decode";

export function formatPrice(price) {
    const priceInTomans = Math.floor(Number(price) / 10);
    return new Intl.NumberFormat('fa-IR').format(priceInTomans) + ' تومان';
}

export function formatWeight(weight) {
    if (weight === '1000g') {
        return 'یک کیلو';
    } else if (weight === '500g') {
        return 'نیم کیلو';
    } else {
        return `250گرم`;
    }
}

export default function formatCommentDate(dateString) {
    const commentDate = new Date(dateString);
    const now = new Date();


    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());


    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);


    const commentDay = new Date(commentDate.getFullYear(), commentDate.getMonth(), commentDate.getDate());


    if (commentDay.getTime() === today.getTime()) {
        return "امروز";
    }


    if (commentDay.getTime() === yesterday.getTime()) {
        return "دیروز";
    }


    const formattedDate = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Tehran'
    }).format(commentDate);

    return formattedDate;
}

export const verifyToken = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        const expirationBuffer = 60;

        if (decoded.exp - expirationBuffer < currentTime) {
            return { valid: false, error: 'Access token will expire soon' };
        }

        return { valid: true, decoded };
    } catch (error) {
        return { valid: false, error: 'Invalid access token' };
    }
};
        //  const expirationTimeInMillis = decoded.exp * 1000;
        //   const expirationDate = new Date(expirationTimeInMillis);
        // console.log('Token expiration date:', expirationDate.toLocaleString());


