//Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.

//IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;

//Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.

//IPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (":"). For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).

//However, we don't replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.

//Besides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.

//You may assume there is no extra space or special characters in the input string.


function validIPAddress(IP){
    if (IP.includes('.')) {
        const IPv4 = IP.split('.');
        let regex = /^\d+$/
        if (IPv4.length !== 4) return "Neither";
        for (let set of IPv4) {
            if (!regex.test(set) ||
            (set < 0 || set > 255) ||
            (set.startsWith('0') && set.length > 1) ||
            (set.length < 1)
            ) return "Neither";
        }
        return "IPv4";
    } else {
        const IPv6 = IP.split(':');
        let regex = /^[a-f0-9]+$/i;
        if (IPv6.length !== 8) return "Neither";
        for (let set of IPv6) {
            if (!regex.test(set) ||
            (set.length > 4) ||
            (set.length < 1))
            return "Neither";
        }
        return "IPv6";
    }
}

