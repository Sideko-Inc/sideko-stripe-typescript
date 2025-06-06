import {
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetailsAddressObj0,
  Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetailsAddressObj0,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetailsAddressObj0,
} from "./treasury-outbound-payment-create-body-destination-payment-method-data-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails
 */
export type TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails =
  {
    address?:
      | (
          | TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetailsAddressObj0
          | string
        )
      | undefined;
    email?: (string | string) | undefined;
    name?: (string | string) | undefined;
    phone?: (string | string) | undefined;
  };

/**
 * @internal
 * TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails =
  {
    address?:
      | (
          | External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetailsAddressObj0
          | string
        )
      | undefined;
    email?: (string | string) | undefined;
    name?: (string | string) | undefined;
    phone?: (string | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails
 */
const SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails: z.ZodType<
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetailsAddressObj0.in,
        z.string(),
      ])
      .optional(),
    email: z.union([z.string(), z.string()]).optional(),
    name: z.union([z.string(), z.string()]).optional(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails
 */
const SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails: z.ZodType<
  External$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetailsAddressObj0.out,
        z.string(),
      ])
      .optional(),
    email: z.union([z.string(), z.string()]).optional(),
    name: z.union([z.string(), z.string()]).optional(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails =
  {
    in: SchemaIn$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails,
    out: SchemaOut$TreasuryOutboundPaymentCreateBodyDestinationPaymentMethodDataBillingDetails,
  };
