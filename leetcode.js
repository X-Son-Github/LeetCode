//twoSum project
twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  return null;
};
//108 ms; 48.29 mb
//addTwoNumbers project
let addTwoNumbers = (l1, l2) => {
  let returnValue = new ListNode(null);
  let now = returnValue;
  let carry = 0;
  while (l1 || l2 || carry) {
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;
    let sum = a + b + carry;
    now.next = new ListNode(sum % 10);
    now = now.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    carry = sum > 9 ? 1 : 0;
  }
  return returnValue.next;
};
//95 ms; 55.28 mb
//lengthOfLongestSubstring project
let lengthOfLongestSubstring = (s) => {
  let charSet = new Set();
  let maxLength = 0;
  let i = 0,
    j = 0;
  for (let element of s) {
    while (charSet.has(s[j])) {
      charSet.delete(s[i]);
      i++;
    }
    charSet.add(s[j]);
    maxLength = Math.max(maxLength, j - i + 1);
    j++;
  }
  return maxLength;
};
//78 ms; 53.81 mb
//findMedianSortedArrays project
let findMedianSortedArrays = (nums1, nums2) => {
  let newArray = [...nums1, ...nums2].sort((a, b) => a - b);
  let medium = Math.floor(newArray.length / 2);
  if (newArray.length % 2 !== 0) {
    return newArray[medium];
  } else {
    let i = newArray[medium];
    let j = newArray[medium - 1];
    let sum = (i + j) / 2;
    return sum;
  }
};
//87 ms; 56.94 mb
//longestPalindrome project
let longestPalindrome = (s) => {
  if (s.length <= 1) return s;

  let start = 0,
    maxLength = 1;

  // Helper function to expand around the center
  let expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Return length of the palindrome
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    // Expand around s[i] (odd length palindromes)
    let len1 = expandAroundCenter(i, i);
    // Expand around s[i] and s[i+1] (even length palindromes)
    let len2 = expandAroundCenter(i, i + 1);

    // Find the maximum length palindrome centered at i
    let len = Math.max(len1, len2);
    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
};
