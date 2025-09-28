export function shareToLinkedIn(url: string, text?: string) {
	const params = new URLSearchParams({
		url,
		...(text && { text })
	});
	window.open(`https://www.linkedin.com/sharing/share-offsite/?${params}`, '_blank');
}
