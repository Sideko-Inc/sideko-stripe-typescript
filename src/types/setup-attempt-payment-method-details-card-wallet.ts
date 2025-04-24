import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SetupAttemptPaymentMethodDetailsCardWallet = {
  applePay?: Record<string, any> | undefined;
  googlePay?: Record<string, any> | undefined;
  /**
   * The type of the card wallet, one of `apple_pay`, `google_pay`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
   */
  type: "apple_pay" | "google_pay" | "link";
};

/**
 * @internal
 * SetupAttemptPaymentMethodDetailsCardWallet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupAttemptPaymentMethodDetailsCardWallet = {
  apple_pay?: Record<string, any> | undefined;
  google_pay?: Record<string, any> | undefined;
  type: "apple_pay" | "google_pay" | "link";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupAttemptPaymentMethodDetailsCardWallet
 */
const SchemaIn$SetupAttemptPaymentMethodDetailsCardWallet: z.ZodType<
  SetupAttemptPaymentMethodDetailsCardWallet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    apple_pay: z.record(z.string(), z.any()).optional(),
    google_pay: z.record(z.string(), z.any()).optional(),
    type: z.enum(["apple_pay", "google_pay", "link"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      apple_pay: "applePay",
      google_pay: "googlePay",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupAttemptPaymentMethodDetailsCardWallet
 */
const SchemaOut$SetupAttemptPaymentMethodDetailsCardWallet: z.ZodType<
  External$SetupAttemptPaymentMethodDetailsCardWallet, // output type of this zod object
  z.ZodTypeDef,
  SetupAttemptPaymentMethodDetailsCardWallet // the object to be transformed
> = z
  .object({
    applePay: z.record(z.string(), z.any()).optional(),
    googlePay: z.record(z.string(), z.any()).optional(),
    type: z.enum(["apple_pay", "google_pay", "link"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applePay: "apple_pay",
      googlePay: "google_pay",
      type: "type",
    });
  });

export const Schemas$SetupAttemptPaymentMethodDetailsCardWallet = {
  in: SchemaIn$SetupAttemptPaymentMethodDetailsCardWallet,
  out: SchemaOut$SetupAttemptPaymentMethodDetailsCardWallet,
};
