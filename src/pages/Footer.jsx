import config from "@/config/config";

export default function Footer() {
  return (
    <footer className="bottom-8 py-6 bg-rose-100 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()}{" "}
      {`${config.couple.brideName} ♥ ${config.couple.groomName}`}. Made with 💍
    </footer>
  );
}
