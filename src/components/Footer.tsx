

function Footer() {
return (
    <footer className="bg-gray-900 text-white p-4 text-center">
        <h1 className="text-lg font-bold" style={{ fontSize: "60px" }}>STAYNET</h1>
        <h2><a href="/blog" className="hover:underline">Blog</a></h2>
        <h2><a href="/about" className="hover:underline">About</a></h2>
        <h2><a href="/socials" className="hover:underline">Socials</a><br /><br /></h2>
        <p className="mt-2">Your one-stop solution for all your needs.</p>
        <a href="/terms" className="hover:underline">Terms & Conditions</a> | <a href="/privacy" className="hover:underline">Privacy Policy</a> | &copy; 2023 STAYNET. All rights reserved.
    </footer>
);
}
export default Footer;
