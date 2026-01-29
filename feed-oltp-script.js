import http from "k6/http";

export const options = {
	stages: [
		{ duration: "10m", target: 10000 }
	]
};

export default function () {
  const url = "http://localhost:5070/order";
  const payload = JSON.stringify({
    qtd: Math.floor(Math.random() * 10) + 1,
    productId: "d093440e-1c7b-4d5d-9508-0866edb30c0f",
    customerId: "0572359a-060f-41bf-a3a7-00fc692fb87f",
  });
	const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
