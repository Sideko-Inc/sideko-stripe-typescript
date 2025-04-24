import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type OutboundPaymentsPaymentMethodDetailsFinancialAccount = {
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
 * OutboundPaymentsPaymentMethodDetailsFinancialAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$OutboundPaymentsPaymentMethodDetailsFinancialAccount = {
  id: string;
  network: "stripe";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object OutboundPaymentsPaymentMethodDetailsFinancialAccount
 */
const SchemaIn$OutboundPaymentsPaymentMethodDetailsFinancialAccount: z.ZodType<
  OutboundPaymentsPaymentMethodDetailsFinancialAccount, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$OutboundPaymentsPaymentMethodDetailsFinancialAccount
 */
const SchemaOut$OutboundPaymentsPaymentMethodDetailsFinancialAccount: z.ZodType<
  External$OutboundPaymentsPaymentMethodDetailsFinancialAccount, // output type of this zod object
  z.ZodTypeDef,
  OutboundPaymentsPaymentMethodDetailsFinancialAccount // the object to be transformed
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

export const Schemas$OutboundPaymentsPaymentMethodDetailsFinancialAccount = {
  in: SchemaIn$OutboundPaymentsPaymentMethodDetailsFinancialAccount,
  out: SchemaOut$OutboundPaymentsPaymentMethodDetailsFinancialAccount,
};
