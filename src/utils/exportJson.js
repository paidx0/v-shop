const exportJson = {
    exportJson(name, data) {
        let blob = new Blob([data]);
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = name;
        link.click();
    }
}

export default exportJson;