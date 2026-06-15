import siteConfig from "@/constants/siteConfig"; 
export default function Footer(){
    return (
        <footer>
            <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        </footer>
    );
}