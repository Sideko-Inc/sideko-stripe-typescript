import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata
 */
export type TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata =
  {
    [additionalProperty: string]: string | null | undefined;
  };

/**
 * @internal
 * TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata =
  {
    [additionalProperty: string]:
      | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata
 */
const SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata: z.ZodType<
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata
 */
const SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata: z.ZodType<
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata =
  {
    in: SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata,
    out: SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataMetadata,
  };
