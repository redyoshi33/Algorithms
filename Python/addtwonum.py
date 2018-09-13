class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        run1 = l1
        run2 = l2
        output = ListNode(None)
        runoutput = output
        counter = 0
        while run1 or run2 or counter > 0:
            if run1:
                x = run1.val
            if run2:
                y = run2.val
            sum = x + y + counter
            runoutput.val = sum % 10
            if sum >= 10:
                counter = 1
            else:
                counter = 0
            if run1:
                run1 = run1.next
            if run2:
                run2 = run2.next
            if run1 or run2 or counter >0:
                temp = ListNode(None)
                runoutput.next = temp
                runoutput = runoutput.next
        return output
    print(addTwoNumbers())