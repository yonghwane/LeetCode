/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

var mergeTwoLists = function(list1, list2) {
    var mergedList = new ListNode();
    var current = mergedList;

    // list1とlist2の値を比較しながら新しいリストを構築
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // どちらかのリストが残っている場合、残りの要素を追加
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // 最初のダミーノードをスキップして結果を返す
    return mergedList.next;
};

