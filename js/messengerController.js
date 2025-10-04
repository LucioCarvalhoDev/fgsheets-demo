class MessengerController {
    constructor(messageBox) {
        this.lastTimeoutID = 0;
        this.duration = 0
        this.messageBox = messageBox;
    }

    postMessage(message, duration = 0) {
        clearTimeout(this.lastTimeoutID);
        this.duration = duration;

        this.messageBox.textContent = message;
        this.messageBox.classList.remove("--hidden");
        if (0 < duration) {
            this.lastTimeoutID = setTimeout(() => {
                this.messageBox.classList.add("--hidden")
            }, duration)
        }
    }

    clear() {
        clearTimeout(this.lastTimeoutID);
    }

    reset() {
        clearTimeout(this.lastTimeoutID)
        this.messageBox.textContent = message
        this.messageBox.classList.remove("--hidden");
        if (0 < duration) {
            this.lastTimeoutID = setTimeout(() => {
                this.messageBox.classList.add("--hidden")
            }, duration)
        }
    }
}