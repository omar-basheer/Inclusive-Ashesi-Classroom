import React, { useEffect, useState } from "react";
import OpenAI from 'openai';
import CircularProgress from '@mui/joy/CircularProgress';

function Summarizer({ summary_text }) {
	const openai = new OpenAI({
		apiKey: "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",
		dangerouslyAllowBrowser: true
	});

	const [summary, setSummary] = useState('');
	const [displayedWords, setDisplayedWords] = useState('');
	const [loading, setLoading] = useState(false);

	const summarize = async () => {
		setLoading(true);
		console.log("making request to openai...")
		try {
			const response = await openai.chat.completions.create({
				model: "gpt-3.5-turbo",
				messages: [
					{
						"role": "system",
						"content": "Generate a bullet point summary, of following text that captures main content:"
					},
					{
						"role": "user",
						"content": `${summary_text}`
					}
				],
				temperature: 1,
				max_tokens: 256,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0,
			});
			setSummary(response.choices[0].message.content)

		} catch (error) {
			console.error('An error occurred while summarizing:', error);
		} finally {
			setLoading(false); // Set loading to false after the request is complete (success or error)
		}

	}

	useEffect(() => {
		// console.log("Summary updated:", summary);

		const wordsArray = summary.split(" ");
		let currentWordIndex = 0;

		const intervalId = setInterval(() => {
			if (currentWordIndex < wordsArray.length) {
				setDisplayedWords(
					wordsArray.slice(0, currentWordIndex + 1).join(" ")
				);
				currentWordIndex++;
			} else {
				clearInterval(intervalId);
			}
		}, 70);

		return () => {
			clearInterval(intervalId);
		};
	}, [summary]);

	const startDisplayingWords = () => {
		summarize();
	};

	return (
		<div className="summarize-section">
			<div className="summary">
				<div className="Box">
					<label> Summary</label>
					<div className="summary-box">
						{loading && (
							<div className="progress-indicator">
								<CircularProgress color="neutral"/>
							</div>
						)}
						<div className="summary-text">{displayedWords}</div>
						<span className="box-bottom"> </span>
					</div>
				</div>
			</div>
			<button className='btn button-sidebar-wide' onClick={startDisplayingWords}>Summarize</button>
		</div>
	);
}

export default Summarizer;