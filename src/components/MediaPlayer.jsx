"use client"

import { useRef, useState } from "react"

const MediaPlayer = ({ type, src }) => {
    const mediaRef = useRef(null)
    const [volume, setVolume] = useState(1)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    const play = () => mediaRef.current.play()

    const pause = () => mediaRef.current.pause()

    const stop = () => {
        mediaRef.current.pause()
        mediaRef.current.currentTime = 0
        setProgress(0)
    }

    const changeVolume = (e) => {
        const newVolume = e.target.value
        setVolume(newVolume)
        mediaRef.current.volume = newVolume
    }

    const handleTimeUpdate = () => {
        const current = mediaRef.current.currentTime
        const total = mediaRef.current.duration
        setProgress((current / total) * 100)
        setDuration(total)
    }

    const changeTime = (e) => {
        const newTime = (e.target.value / 100) * mediaRef.current.duration
        mediaRef.current.currentTime = newTime
        setProgress(e.target.value)
    }

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`
    }

    return (
        <div className="p-6">
            {type === "video" ? (
                <video
                    ref={mediaRef}
                    className="w-full max-w-xl mx-auto rounded-lg shadow-md"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleTimeUpdate}
                    controls={false}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <audio ref={mediaRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleTimeUpdate} controls={false}>
                    <source src={src} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            )}
            <div className="flex justify-center space-x-4 my-4">
                <button
                    onClick={pause}
                    className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            fill="#fff"
                            d="M16 19q-.825 0-1.412-.587T14 17V7q0-.825.588-1.412T16 5t1.413.588T18 7v10q0 .825-.587 1.413T16 19m-8 0q-.825 0-1.412-.587T6 17V7q0-.825.588-1.412T8 5t1.413.588T10 7v10q0 .825-.587 1.413T8 19"
                        />
                    </svg>
                </button>
                <button
                    onClick={play}
                    className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
                        <path
                            fill="#fff"
                            d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                        />
                    </svg>
                </button>
                <button
                    onClick={stop}
                    className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            fill="#fff"
                            d="M6 16V8q0-.825.588-1.412T8 6h8q.825 0 1.413.588T18 8v8q0 .825-.587 1.413T16 18H8q-.825 0-1.412-.587T6 16"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
                <span>{formatTime(mediaRef.current?.currentTime || 0)}</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={changeTime}
                    className="w-full max-w-lg h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <span>{formatTime(duration)}</span>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        fill="#fff"
                        d="M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"
                    />
                </svg>
                <input
                    id="volume"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={changeVolume}
                    className="w-full max-w-xs h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
            </div>
        </div>
    )
}

export default MediaPlayer
