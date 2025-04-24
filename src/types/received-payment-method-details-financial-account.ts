import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ReceivedPaymentMethodDetailsFinancialAccount = {
  /**
   * The FinancialAccount ID.
   */
  id: string;
  /**
   * The rails the ReceivedCredit was sent over. A FinancialAccount can only send funds over `stripe`.
   */
  network: "stripe";
};

/**
 * @internal
 * ReceivedPaymentMethodDetailsFinancialAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReceivedPaymentMethodDetailsFinancialAccount = {
  id: string;
  network: "stripe";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReceivedPaymentMethodDetailsFinancialAccount
 */
const SchemaIn$ReceivedPaymentMethodDetailsFinancialAccount: z.ZodType<
  ReceivedPaymentMethodDetailsFinancialAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    network: z.enum(["stripe"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      network: "network",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReceivedPaymentMethodDetailsFinancialAccount
 */
const SchemaOut$ReceivedPaymentMethodDetailsFinancialAccount: z.ZodType<
  External$ReceivedPaymentMethodDetailsFinancialAccount, // output type of this zod object
  z.ZodTypeDef,
  ReceivedPaymentMethodDetailsFinancialAccount // the object to be transformed
> = z
  .object({
    id: z.string(),
    network: z.enum(["stripe"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      network: "network",
    });
  });

export const Schemas$ReceivedPaymentMethodDetailsFinancialAccount = {
  in: SchemaIn$ReceivedPaymentMethodDetailsFinancialAccount,
  out: SchemaOut$ReceivedPaymentMethodDetailsFinancialAccount,
};
