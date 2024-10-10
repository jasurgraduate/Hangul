// Questions.js
export const questions = [
    // Basic Consonants
    { question: "What is the English letter for 'ㄱ'?", answer: "g", options: ["g", "n", "d", "h"] },
    { question: "What is the English letter for 'ㄴ'?", answer: "n", options: ["m", "n", "b", "r"] },
    { question: "What is the English letter for 'ㄷ'?", answer: "d", options: ["d", "j", "p", "s"] },
    { question: "What is the English letter for 'ㄹ'?", answer: "r", options: ["m", "k", "r", "t"] },
    { question: "What is the English letter for 'ㅁ'?", answer: "m", options: ["b", "h", "m", "g"] },
    { question: "What is the English letter for 'ㅂ'?", answer: "b", options: ["b", "d", "j", "s"] },
    { question: "What is the English letter for 'ㅅ'?", answer: "s", options: ["s", "ng", "k", "n"] },
    { question: "What is the English letter for 'ㅇ'?", answer: "ng", options: ["ng", "a", "e", "o"] },
    { question: "What is the English letter for 'ㅈ'?", answer: "j", options: ["j", "h", "g", "d"] },
    { question: "What is the English letter for 'ㅊ'?", answer: "ch", options: ["p", "ch", "k", "t"] },
    { question: "What is the English letter for 'ㅋ'?", answer: "k", options: ["k", "h", "m", "s"] },
    { question: "What is the English letter for 'ㅌ'?", answer: "t", options: ["t", "p", "r", "d"] },
    { question: "What is the English letter for 'ㅍ'?", answer: "b/p", options: ["h", "t/d", "b/p", "m"] },
    { question: "What is the English letter for 'ㅎ'?", answer: "h", options: ["h", "n", "g", "j"] },

    // Double Consonants (쌍자음)
    { question: "What is the English sound for 'ㄲ'?", answer: "kk", options: ["kk", "gg", "k", "h"] },
    { question: "What is the English sound for 'ㄸ'?", answer: "tt", options: ["tt", "dd", "tt", "rr"] },
    { question: "What is the English sound for 'ㅃ'?", answer: "pp", options: ["pp", "bb", "pp", "m"] },
    { question: "What is the English sound for 'ㅆ'?", answer: "ss", options: ["ss", "s", "tsh", "rr"] },
    { question: "What is the English sound for 'ㅉ'?", answer: "jj", options: ["jj", "j", "tch", "gg"] },

    // Basic Vowels
    { question: "What is the English letter for 'ㅏ'?", answer: "a", options: ["a", "o", "u", "e"] },
    { question: "What is the English letter for 'ㅑ'?", answer: "ya", options: ["ya", "ae", "ye", "o"] },
    { question: "What is the English letter for 'ㅓ'?", answer: "eo", options: ["yeo", "e", "u", "eo"] },
    { question: "What is the English letter for 'ㅕ'?", answer: "yeo", options: ["o", "yeo", "a", "u"] },
    { question: "What is the English letter for 'ㅗ'?", answer: "o", options: ["a", "e", "o", "i"] },
    { question: "What is the English letter for 'ㅛ'?", answer: "yo", options: ["yo", "yu", "wa", "we"] },
    { question: "What is the English letter for 'ㅜ'?", answer: "u", options: ["u", "i", "eo", "a"] },
    { question: "What is the English letter for 'ㅠ'?", answer: "yu", options: ["yu", "yo", "wa", "we"] },
    { question: "What is the English letter for 'ㅡ'?", answer: "eu", options: ["eu", "i", "u", "o"] },
    { question: "What is the English letter for 'ㅣ'?", answer: "i", options: ["i", "e", "ae", "ya"] },

    // Minimal Pairs for Vowels
    { question: "Which of these sounds is for 'ㅐ'?", answer: "ae", options: ["ae", "e", "a", "i"] },
    { question: "Which of these sounds is for 'ㅔ'?", answer: "e", options: ["ae", "e", "a", "i"] },
    { question: "Which of these sounds is for 'ㅒ'?", answer: "yae", options: ["yae", "ye", "e", "i"] },
    { question: "Which of these sounds is for 'ㅖ'?", answer: "ye", options: ["yae", "ye", "e", "a"] },

    // Combined Vowels
    { question: "What is the English letter for 'ㅘ'?", answer: "wa", options: ["wa", "we", "wi", "eu"] },
    { question: "What is the English letter for 'ㅙ'?", answer: "wae", options: ["wa", "wae", "wo", "e"] },
    { question: "What is the English letter for 'ㅝ'?", answer: "wo", options: ["wo", "we", "wa", "u"] },
    { question: "What is the English letter for 'ㅞ'?", answer: "we", options: ["we", "wi", "e", "o"] },
    { question: "What is the English letter for 'ㅟ'?", answer: "wi", options: ["wi", "eu", "i", "o"] },
    { question: "What is the English letter for 'ㅢ'?", answer: "ui", options: ["ui", "u", "i", "a"] },

    // Common Syllables
    { question: "What is the English letter for '가'?", answer: "ga", options: ["ga", "na", "da", "ma"] },
    { question: "What is the English letter for '나'?", answer: "na", options: ["ga", "na", "da", "ba"] },
    { question: "What is the English letter for '다'?", answer: "da", options: ["ja", "da", "sa", "ma"] },
    { question: "What is the English letter for '마'?", answer: "ma", options: ["ma", "ba", "na", "sa"] },
    { question: "What is the English letter for '바'?", answer: "ba", options: ["da", "ba", "ga", "ja"] },
    { question: "What is the English letter for '사'?", answer: "sa", options: ["sa", "da", "ja", "ga"] },
    { question: "What is the English letter for '아'?", answer: "a", options: ["a", "e", "o", "u"] },
    { question: "What is the English letter for '자'?", answer: "ja", options: ["ja", "sa", "ba", "ga"] },
    { question: "What is the English letter for '차'?", answer: "cha", options: ["cha", "ja", "da", "sa"] },
    { question: "What is the English letter for '카'?", answer: "ka", options: ["ka", "ta", "pa", "ma"] },
    { question: "What is the English letter for '타'?", answer: "ta", options: ["ta", "da", "ka", "ba"] },
    { question: "What is the English letter for '파'?", answer: "pa", options: ["pa", "ya", "ma", "ra"] },
    { question: "What is the English letter for '하'?", answer: "ha", options: ["ha", "ka", "ma", "ga"] },

    // Minimal Pairs for Consonants
    { question: "Which of these sounds is for 'ㅈ'?", answer: "j", options: ["j", "ch", "g", "d"] },
    { question: "Which of these sounds is for 'ㅊ'?", answer: "ch", options: ["ch", "j", "t", "s"] },
];
