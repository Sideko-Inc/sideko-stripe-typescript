import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryOutboundTransferCancelBody
 */
export type TreasuryOutboundTransferCancelBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]: (string[] | undefined) | any | null | undefined;
};

/**
 * @internal
 * TreasuryOutboundTransferCancelBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransferCancelBody = {
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | External$TreasuryOutboundTransferCancelBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransferCancelBody
 */
const SchemaIn$TreasuryOutboundTransferCancelBody: z.ZodType<
  TreasuryOutboundTransferCancelBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransferCancelBody
 */
const SchemaOut$TreasuryOutboundTransferCancelBody: z.ZodType<
  External$TreasuryOutboundTransferCancelBody, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransferCancelBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
    });
  });

export const Schemas$TreasuryOutboundTransferCancelBody = {
  in: SchemaIn$TreasuryOutboundTransferCancelBody,
  out: SchemaOut$TreasuryOutboundTransferCancelBody,
};
