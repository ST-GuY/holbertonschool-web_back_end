export default function loadBalancer(chinaDownload, USDownload) {
	return Promise.race([chinaDownload,USDownload])
}
// Promise.race() lance plusieurs Promises en même temps
// La première Promise qui se termine gagne
// Peu importe qu’elle soit résolue ou rejetée