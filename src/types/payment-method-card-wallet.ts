import {
  External$PaymentMethodCardWalletMasterpass,
  PaymentMethodCardWalletMasterpass,
  Schemas$PaymentMethodCardWalletMasterpass,
} from "./payment-method-card-wallet-masterpass";
import {
  External$PaymentMethodCardWalletVisaCheckout,
  PaymentMethodCardWalletVisaCheckout,
  Schemas$PaymentMethodCardWalletVisaCheckout,
} from "./payment-method-card-wallet-visa-checkout";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodCardWallet = {
  amexExpressCheckout?: Record<string, any> | undefined;
  applePay?: Record<string, any> | undefined;
  /**
   * (For tokenized numbers only.) The last four digits of the device account number.
   */
  dynamicLast4?: string | null | undefined;
  googlePay?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  masterpass?: PaymentMethodCardWalletMasterpass | undefined;
  samsungPay?: Record<string, any> | undefined;
  /**
   * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
   */
  type:
    | "amex_express_checkout"
    | "apple_pay"
    | "google_pay"
    | "link"
    | "masterpass"
    | "samsung_pay"
    | "visa_checkout";
  visaCheckout?: PaymentMethodCardWalletVisaCheckout | undefined;
};

/**
 * @internal
 * PaymentMethodCardWallet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCardWallet = {
  amex_express_checkout?: Record<string, any> | undefined;
  apple_pay?: Record<string, any> | undefined;
  dynamic_last4?: string | null | undefined;
  google_pay?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  masterpass?: External$PaymentMethodCardWalletMasterpass | undefined;
  samsung_pay?: Record<string, any> | undefined;
  type:
    | "amex_express_checkout"
    | "apple_pay"
    | "google_pay"
    | "link"
    | "masterpass"
    | "samsung_pay"
    | "visa_checkout";
  visa_checkout?: External$PaymentMethodCardWalletVisaCheckout | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCardWallet
 */
const SchemaIn$PaymentMethodCardWallet: z.ZodType<
  PaymentMethodCardWallet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amex_express_checkout: z.record(z.string(), z.any()).optional(),
    apple_pay: z.record(z.string(), z.any()).optional(),
    dynamic_last4: z.string().nullable().optional(),
    google_pay: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    masterpass: Schemas$PaymentMethodCardWalletMasterpass.in.optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    type: z.enum([
      "amex_express_checkout",
      "apple_pay",
      "google_pay",
      "link",
      "masterpass",
      "samsung_pay",
      "visa_checkout",
    ]),
    visa_checkout: Schemas$PaymentMethodCardWalletVisaCheckout.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amex_express_checkout: "amexExpressCheckout",
      apple_pay: "applePay",
      dynamic_last4: "dynamicLast4",
      google_pay: "googlePay",
      link: "link",
      masterpass: "masterpass",
      samsung_pay: "samsungPay",
      type: "type",
      visa_checkout: "visaCheckout",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCardWallet
 */
const SchemaOut$PaymentMethodCardWallet: z.ZodType<
  External$PaymentMethodCardWallet, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCardWallet // the object to be transformed
> = z
  .object({
    amexExpressCheckout: z.record(z.string(), z.any()).optional(),
    applePay: z.record(z.string(), z.any()).optional(),
    dynamicLast4: z.string().nullable().optional(),
    googlePay: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    masterpass: Schemas$PaymentMethodCardWalletMasterpass.out.optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    type: z.enum([
      "amex_express_checkout",
      "apple_pay",
      "google_pay",
      "link",
      "masterpass",
      "samsung_pay",
      "visa_checkout",
    ]),
    visaCheckout: Schemas$PaymentMethodCardWalletVisaCheckout.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amexExpressCheckout: "amex_express_checkout",
      applePay: "apple_pay",
      dynamicLast4: "dynamic_last4",
      googlePay: "google_pay",
      link: "link",
      masterpass: "masterpass",
      samsungPay: "samsung_pay",
      type: "type",
      visaCheckout: "visa_checkout",
    });
  });

export const Schemas$PaymentMethodCardWallet = {
  in: SchemaIn$PaymentMethodCardWallet,
  out: SchemaOut$PaymentMethodCardWallet,
};
