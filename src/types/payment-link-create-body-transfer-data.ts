import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
 */
export type PaymentLinkCreateBodyTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * @internal
 * PaymentLinkCreateBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyTransferData = {
  amount?: number | undefined;
  destination: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyTransferData
 */
const SchemaIn$PaymentLinkCreateBodyTransferData: z.ZodType<
  PaymentLinkCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyTransferData
 */
const SchemaOut$PaymentLinkCreateBodyTransferData: z.ZodType<
  External$PaymentLinkCreateBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    destination: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      destination: "destination",
    });
  });

export const Schemas$PaymentLinkCreateBodyTransferData = {
  in: SchemaIn$PaymentLinkCreateBodyTransferData,
  out: SchemaOut$PaymentLinkCreateBodyTransferData,
};
