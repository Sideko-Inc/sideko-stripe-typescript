import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
 */
export type TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 =
  {
    network?: ("ach" | "us_domestic_wire") | undefined;
  };

/**
 * @internal
 * TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 =
  {
    network?: ("ach" | "us_domestic_wire") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    network: z.enum(["ach", "us_domestic_wire"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network: "network",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0
 */
const SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0: z.ZodType<
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 // the object to be transformed
> = z
  .object({
    network: z.enum(["ach", "us_domestic_wire"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network: "network",
    });
  });

export const Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0 =
  {
    in: SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
    out: SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodOptionsUsBankAccountObj0,
  };
