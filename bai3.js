function countWords() {
    // Lấy văn bản từ textarea
    const text = document.getElementById('textInput').value;
    const cleanedText = text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    const words = cleanedText.split(/\s+/);

    const wordCount = {};
    words.forEach(word => {
        if (word) {
            if (wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }
    });

    displayResults(wordCount);
}

function displayResults(wordCount) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h2>Kết quả:</h2>";

    // Tạo bảng
    let tableHTML = "<table><tr><th>Từ</th><th>Số lần xuất hiện</th></tr>";
    for (const word in wordCount) {
        tableHTML += `<tr><td>${word}</td><td>${wordCount[word]}</td></tr>`;
    }
    tableHTML += "</table>";

    resultsDiv.innerHTML += tableHTML;
    resultsDiv.style.display = 'block';
}