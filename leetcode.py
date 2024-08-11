#twoSum project
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i in range(len(nums)):
            for j in range(len(nums)):
                if nums[j] == target - nums[i] and i is not j:
                    return [i, j]
#3338ms; 17.25mb
#addTwoNumbers project   
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        returnValue = ListNode(0)
        now = returnValue
        carry = 0
        while l1 or l2 or carry :
            a = l1.val if l1 else 0
            b = l2.val if l2 else 0
            sum = a + b + carry
            now.next = ListNode (sum % 10)
            now = now.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            carry = 1 if sum > 9 else 0            
        return returnValue.next
#46 ms; 16.57 mb (escluso import e class ListNode)
#lengthOfLongestSubstring project
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set()
        max_length = 0
        i = 0
        for j in range(len(s)):
            while s[j] in char_set:
                char_set.remove(s[i])
                i += 1
            char_set.add(s[j])
            max_length = max(max_length, j - i + 1)
        return max_length
#53 ms; 16.54 mb
#findMedianSortedArrays project
class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        merged_array = sorted(nums1 + nums2)
        median_index = len(merged_array) 
        if len(merged_array) % 2 != 0:
            return merged_array[median_index]
        else:
            i = merged_array[median_index]
            j = merged_array[median_index - 1]
            median = (i + j) / 2
            return median
#81 ms; 16.78 mb
#longestPalindrome project