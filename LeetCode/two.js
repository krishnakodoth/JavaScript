const iter1 = (n1, n2, rest = 0) => {
    if (!n1 && !n2 && !rest) return null;
    const result = (n1?.val || 0);
    const newVal =  + (n2?.val || 0) + rest;
    const nextNode = iter1(n1?.next, n2?.next, Math.floor(newVal / 10));
    return new ListNode(newVal % 10, nextNode);
}