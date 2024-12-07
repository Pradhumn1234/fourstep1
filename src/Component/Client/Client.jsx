import React from "react";
const Client = () => {
  const cards = [
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAUpFiV_ZDN4Hqqk2LK-sLU0EEOtTcNgjbjo9SwuM6KDPsAHZo",
      alt: "Rescom Solar",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAUpFiV_ZDN4Hqqk2LK-sLU0EEOtTcNgjbjo9SwuM6KDPsAHZo",
      alt: "Rescom Solar",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAUpFiV_ZDN4Hqqk2LK-sLU0EEOtTcNgjbjo9SwuM6KDPsAHZo",
      alt: "Rescom Solar",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAUpFiV_ZDN4Hqqk2LK-sLU0EEOtTcNgjbjo9SwuM6KDPsAHZo",
      alt: "Rescom Solar",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAUpFiV_ZDN4Hqqk2LK-sLU0EEOtTcNgjbjo9SwuM6KDPsAHZo",
      alt: "Rescom Solar",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAUpFiV_ZDN4Hqqk2LK-sLU0EEOtTcNgjbjo9SwuM6KDPsAHZo",
      alt: "Rescom Solar",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgUKXLSw7bzj86MZCPAZroSpbGVhhVF_B1uGwABKoQ6-2HDr2p",
      alt: "Electrical Junction",
    },
  ];

  return (
    <div className="container md:px-10 py-10 md:py-0  px-5">
      <div className=" grid md:grid-cols-2 place-items-center justify-center items-center md:gap-0 gap-8">
        <div className="flex-col animate-slide-in-left">
          <p className="text-[12px] text-zinc-500 leading-3 font-bold uppercase">
            Clients
          </p>
          <h2 className="my-5 text-3xl font-bold capitalize">
            The confidence of our clients
          </h2>
          <p className="text-[15px] leading-6">
            Over the course of the past three years, we have had the privilege
            of collaborating with a diverse array of over 75 clients, each
            contributing to our rich tapestry of experience and expertise. Among
            these valued partnerships, several hold special significance due to
            their impact on our growth and shared success. As a testament to
            these pivotal collaborations, we proudly showcase the logos of these
            esteemed clients on our website.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5 place-items-center md:w-2/3 w-full animate-slide-in-from-right">
          {cards.map((card, i) => (
            <div
              key={i}
              className="w-full bg-white shadow-lg overflow-hidden border rounded-md grid place-items-center p-2"
            >
              <img
                className="w-full h-full object-cover"
                src={card.img}
                alt={card.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
