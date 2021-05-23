import Head from "next/head";
import Image from "next/image";
import { FormEvent, FormEventHandler, useState } from "react";

const APPLE_MAPS_REGEX =
  /^.+(maps.apple.com\/\?CL\.loc\.vcf\=)(?<coordinates>(?<latitude>\-?([0-8]?[0-9](\.\d+)?|90(.[0]+)?)\s?[,]\s?)+(?<longitude>\-?([1]?[0-7]?[0-9](\.\d+)?|180((.[0]+)?))))/gims;

const Home = () => {
  const [appleMapsUrl, setAppleMapsUrl] = useState("");

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const regexResults = APPLE_MAPS_REGEX.exec(appleMapsUrl);

    if (regexResults === null) {
      return;
    }

    const {
      // @ts-ignore
      groups: { coordinates },
    } = regexResults;

    setAppleMapsUrl("");

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${coordinates}`,
      "_blank"
    );
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col h-screen pt-8">
        <div className="flex-grow">
          <div className="flex items-center justify-center space-x-6">
            <div className="mt-4">
              <Image
                src="/apple-maps.png"
                alt="Logo of Apple Maps"
                width={96}
                height={96}
              />
            </div>
            <p className="text-4xl">to</p>
            <div className="mt-1">
              <Image
                src="/google-maps.png"
                alt="Logo of Google Maps"
                width={102}
                height={102}
              />
            </div>
          </div>
          <form
            className="px-8 mt-12 max-w-md mx-auto"
            onSubmit={handleOnSubmit}
          >
            <div>
              <label
                htmlFor="apple-maps"
                className="block text-sm font-medium text-gray-700"
              >
                Your Apple Maps URL
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="apple-maps"
                  id="apple-maps"
                  className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="https://maps.apple.com/..."
                  value={appleMapsUrl}
                  onChange={(e) => setAppleMapsUrl(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex flex-col w-full items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white text-center bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Open with Google Maps
              </button>
            </div>
          </form>
        </div>
        <footer className="bg-white">
          <div className="max-w-lg mx-auto py-4 px-4 sm:px-6 md:py-8 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/valentindotxyz/atogmaps.com/blob/main/PRIVACY.md"
                className="text-gray-400 hover:text-gray-500"
              >
                <span>Privacy</span>
              </a>
              <a
                href="https://github.com/valentindotxyz/atogmaps.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <span>Source</span>
              </a>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              All product names, logos, brands, trademarks and registered
              trademarks are property of their respective owners.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
