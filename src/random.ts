export function getDailyNumber() {
    const today = new Date();
    const todayNumber = parseInt(`${today.getFullYear()}${today.getDate()}${today.getMonth}`);
    function mulberry32(a: number) { 
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
    return mulberry32(todayNumber);
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffleArray(array: any[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(getDailyNumber() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }