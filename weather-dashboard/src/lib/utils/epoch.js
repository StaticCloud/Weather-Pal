export const unixConverterLong = function(epoch) {
    return new Date(epoch * 1000)
        .toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
}

export const unixConvert = function(epoch) {
    return new Date(epoch * 1000)
        .toLocaleDateString("en-US", {
            weekday: "short",
        });
}