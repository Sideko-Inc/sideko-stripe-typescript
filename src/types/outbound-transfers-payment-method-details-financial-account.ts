import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type OutboundTransfersPaymentMethodDetailsFinancialAccount = {
  /**
   * Token of the FinancialAccount.
   */
  id: string;
  /**
   * The rails used to send funds.
   */
  network: "stripe";
};

/**
 * @internal
 * OutboundTransfersPaymentMethodDetailsFinancialAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutboundTransfersPaymentMethodDetailsFinancialAccount = {
  id: string;
  network: "stripe";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OutboundTransfersPaymentMethodDetailsFinancialAccount
 */
const SchemaIn$OutboundTransfersPaymentMethodDetailsFinancialAccount: z.ZodType<
  OutboundTransfersPaymentMethodDetailsFinancialAccount, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutboundTransfersPaymentMethodDetailsFinancialAccount
 */
const SchemaOut$OutboundTransfersPaymentMethodDetailsFinancialAccount: z.ZodType<
  External$OutboundTransfersPaymentMethodDetailsFinancialAccount, // output type of this zod object
  z.ZodTypeDef,
  OutboundTransfersPaymentMethodDetailsFinancialAccount // the object to be transformed
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

export const Schemas$OutboundTransfersPaymentMethodDetailsFinancialAccount = {
  in: SchemaIn$OutboundTransfersPaymentMethodDetailsFinancialAccount,
  out: SchemaOut$OutboundTransfersPaymentMethodDetailsFinancialAccount,
};
