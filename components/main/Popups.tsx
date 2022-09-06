import { toast } from "react-hot-toast";
import { Card } from "../../modules/notification/components/Notification";

const getSnippedString = (label: string) => {
  return `${label.slice(0, 3)}...
    ${label.slice(label.length - 6, label.length - 1)}`;
};

// Need to set a real promise for this for the typings to work
const tempPromise = () =>
  new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      })
    );
  });

export const Popups = () => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <button
        className="bg-blue-200"
        onClick={() =>
          toast.promise(
            tempPromise,
            {
              loading: () => (
                <Card title="Confirming Wallet" state="Loading" hideDeco />
              ),
              success: (data) => (
                <Card title="Wallet Connected" state="Success">
                  <p className="text-background-300">
                    {getSnippedString(
                      "0x7ded6ca035105fef5250606cabbbc7df08d2f695"
                    )}
                  </p>
                </Card>
              ),
              error: (err) => (
                <Card title="Wallet blew up" state="Failed">
                  <a className="text-underline" href={"/err"}>
                    {err ?? "11105"}
                  </a>
                </Card>
              ),
            },
            {
              className: "bg-red-500",
            }
          )
        }
      >
        Promise/Loading/Async
      </button>
      <button
        className="bg-blue-200"
        onClick={() =>
          toast.custom((t) => (
            <Card title="Wallet Connected" state="Connected">
              {" "}
              <p className="text-background-300">
                Connected to{" "}
                {getSnippedString("0x7ded6ca035105fef5250606cabbbc7df08d2f695")}
              </p>
            </Card>
          ))
        }
      >
        Connected Wallet
      </button>
      <button
        className="bg-blue-200"
        onClick={() =>
          toast.custom((t) => (
            <Card title="Wallet Disconnected" state="Disconnected">
              {" "}
              <p>
                Disconnected from{" "}
                {getSnippedString("0x7ded6ca035105fef5250606cabbbc7df08d2f695")}
              </p>
            </Card>
          ))
        }
      >
        Disconnected Wallet
      </button>
      <button
        className="bg-blue-200"
        onClick={() =>
          toast.custom((t) => (
            <Card title="Error blew up" state="Failed">
              {" "}
              <a className="underline" href={"/err"}>
                Error Code
              </a>
            </Card>
          ))
        }
      >
        Error pop up
      </button>
      <button
        className="bg-blue-200"
        onClick={() =>
          toast.custom((t) => (
            <Card title="Swap completed" state="Success">
              {" "}
              <p>You swapped 69.69 MARCO for 420.420 DUST</p>
              <a className="underline " href={"/err"}>
                View Transaction
              </a>
            </Card>
          ))
        }
      >
        Something completed
      </button>
    </div>
  );
};
