'use strict';

/*  目标时间与当前时间相比较差值
 *  @param targetDate {String} 目标时间
 *  @return {String} 返回一个对比后结果，如'一天前'、'一周前'、'一年前'
 */
export const compareDate = date => {
    let oldDate = new Date(date),
        newDate = new Date(),
        oldTime = oldDate.getTime(),
        newTime = newDate.getTime(),
        difference = newTime - oldDate;

    const second = 1 * 1000,
        minute = second * 60,
        hour = minute *60,
        day = hour * 24,
        month = day * 30,
        year = month * 12;

    switch (true) {
        case difference >= year:
            return Math.floor(difference / year) + ' 年前';

        case difference >= month:
            return Math.floor(difference / month) + ' 个月前';

        case difference >= day:
            return Math.floor(difference / day) + ' 天前';

        case difference >= hour:
            return Math.floor(difference / hour) + ' 小时前';

        case difference >= minute:
            return Math.floor(difference / minute) + ' 分钟前';

        case difference >= second:
            return Math.floor(difference / second) + ' 分钟前';

        default:
            return '';
    }
};

/*  分割字符串获取最后一个参数
 *  @param pathname {String} 目标字符串
 *  @return {String}
 */
export const getLastParam = pathname => {
    let path = pathname.split("/");
    return path[path.length - 1];
};

/*  转换tab类型
 *  @param tab {String} 目标字符串
 *  @return {String}
 */
export const changeTabSchema = tab => {
    return {
        'all': '全部',
        'good': '精华',
        'share': '分享',
        'ask': '问答',
        'job': '招聘',
        'dev': '测试'
    }[tab] || '';
};
