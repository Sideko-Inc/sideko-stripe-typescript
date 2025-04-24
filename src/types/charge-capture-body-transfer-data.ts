import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
 */
export type ChargeCaptureBodyTransferData = {
  amount?: number | undefined;
};

/**
 * @internal
 * ChargeCaptureBodyTransferData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCaptureBodyTransferData = {
  amount?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCaptureBodyTransferData
 */
const SchemaIn$ChargeCaptureBodyTransferData: z.ZodType<
  ChargeCaptureBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCaptureBodyTransferData
 */
const SchemaOut$ChargeCaptureBodyTransferData: z.ZodType<
  External$ChargeCaptureBodyTransferData, // output type of this zod object
  z.ZodTypeDef,
  ChargeCaptureBodyTransferData // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
    });
  });

export const Schemas$ChargeCaptureBodyTransferData = {
  in: SchemaIn$ChargeCaptureBodyTransferData,
  out: SchemaOut$ChargeCaptureBodyTransferData,
};
