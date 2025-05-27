import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TrackParcel = () => {
  const { trackingId } = useParams();
  const [parcel, setParcel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://your-api-url.com/api/parcels/${trackingId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Parcel not found");
        }
        return res.json();
      })
      .then(data => {
        setParcel(data);
        setLoading(false);
      })
      .catch(err => {
        toast.error(err.message || "Failed to fetch parcel");
        setLoading(false);
      });
  }, [trackingId]);

  if (loading) {
    return <div className="text-center text-lg py-10">Loading...</div>;
  }

  if (!parcel) {
    return <div className="text-center text-red-500 py-10">No parcel found for tracking ID: {trackingId}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Tracking Details for: <span className="text-yellow-500">{trackingId}</span></h2>
      <p><strong>Status:</strong> {parcel.status}</p>
      <p><strong>Sender:</strong> {parcel.sender}</p>
      <p><strong>Receiver:</strong> {parcel.receiver}</p>
      <p><strong>Destination:</strong> {parcel.destination}</p>
      <p><strong>Current Location:</strong> {parcel.currentLocation}</p>
      <p><strong>Estimated Delivery:</strong> {parcel.estimatedDelivery}</p>
    </div>
  );
};

export default TrackParcel;
