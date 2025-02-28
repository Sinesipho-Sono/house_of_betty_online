import React from "react";

export default function Footer() {
  return (
    <div className="Footer bg-pink text-black text-center p-4 mt-auto">
      <footer>
        <p className="mb-2">
          This website was coded by{" "}
          <a href="https://github.com/Sinesipho-Sono" className="underline">
            Sinesipho Sono
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/Sinesipho-Sono/house_of_betty_online"
            className="underline"
          >
            open-sourced
          </a>
        </p>
        <p>
          {" "}
          © {new Date().getFullYear()} Sinesipho Sono. All Rights Reserved.{" "}
        </p>
      </footer>
    </div>
  );
}
